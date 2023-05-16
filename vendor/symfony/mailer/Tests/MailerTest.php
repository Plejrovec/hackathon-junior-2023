<?php

/*
 * This file is part of the Symfony package.
 *
 * (c) Fabien Potencier <fabien@symfony.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Symfony\Component\Mailer\Tests;

use PHPUnit\Framework\TestCase;
use Psr\EventDispatcher\EventDispatcherInterface;
use Symfony\Component\Mailer\Event\MessageEvent;
use Symfony\Component\Mailer\Exception\LogicException;
use Symfony\Component\Mailer\Mailer;
use Symfony\Component\Mailer\Transport\NullTransport;
use Symfony\Component\Mailer\Transport\TransportInterface;
use Symfony\Component\Messenger\Envelope;
use Symfony\Component\Messenger\MessageBusInterface;
use Symfony\Component\Messenger\Stamp\StampInterface;
use Symfony\Component\Mime\Email;
use Symfony\Component\Mime\RawMessage;

class MailerTest extends TestCase
{
    public function testSendingRawMessages()
    {
        $this->expectException(LogicException::class);

        $transport = new Mailer($this->createMock(TransportInterface::class), $this->createMock(MessageBusInterface::class), $this->createMock(EventDispatcherInterface::class));
        $transport->send(new RawMessage('Some raw email message'));
    }

    public function testSendMessageToBus()
    {
        $bus = new class() implements MessageBusInterface {
            public $messages = [];
            public $stamps = [];

            public function dispatch($message, array $stamps = []): Envelope
            {
                $this->messages[] = $message;
                $this->stamps = $stamps;

                return new Envelope($message, $stamps);
            }
        };

        $stamp = $this->createMock(StampInterface::class);

        $dispatcher = $this->createMock(EventDispatcherInterface::class);
        $dispatcher->expects($this->once())
            ->method('dispatch')
            ->with(self::callback(static function (MessageEvent $event) use ($stamp) {
                $event->addStamp($stamp);

                return 'Time for Symfony Mailer!' === $event->getMessage()->getSubject();
            }))
            ->willReturnArgument(0)
        ;

        $mailer = new Mailer(new NullTransport($dispatcher), $bus, $dispatcher);

        $email = (new Email())
            ->from('hello@example.com')
            ->to('you@example.com')
            ->subject('Time for Symfony Mailer!')
            ->text('Sending emails is fun again!')
            ->html('<p>See Twig integration for better HTML integration!</p>');

        $mailer->send($email);

        self::assertCount(1, $bus->messages);
        self::assertSame($email, $bus->messages[0]->getMessage());
        self::assertCount(1, $bus->stamps);
        self::assertSame([$stamp], $bus->stamps);
    }
}

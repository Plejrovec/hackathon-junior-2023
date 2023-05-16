<?php

declare(strict_types=1);

/*
 * This file is part of the league/commonmark package.
 *
 * (c) Colin O'Dell <colinodell@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace League\CommonMark\Tests\Functional\Extension\Autolink;

use League\CommonMark\ConverterInterface;
use League\CommonMark\Environment\Environment;
use League\CommonMark\Extension\Autolink\AutolinkExtension;
use League\CommonMark\Extension\CommonMark\CommonMarkCoreExtension;
use League\CommonMark\Tests\Functional\AbstractLocalDataTest;
use League\CommonMark\Xml\MarkdownToXmlConverter;

final class AutolinkXmlTest extends AbstractLocalDataTest
{
    /**
     * @param array<string, mixed> $config
     */
    protected function createConverter(array $config = []): ConverterInterface
    {
        $environment = new Environment($config);
        $environment->addExtension(new CommonMarkCoreExtension());
        $environment->addExtension(new AutolinkExtension());

        return new MarkdownToXmlConverter($environment);
    }

    /**
     * {@inheritDoc}
     */
    public function dataProvider(): iterable
    {
        yield from $this->loadTests(__DIR__ . '/xml', '*', '.md', '.xml');
    }
}

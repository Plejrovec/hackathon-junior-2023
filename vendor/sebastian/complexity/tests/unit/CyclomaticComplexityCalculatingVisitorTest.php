<?php declare(strict_types=1);
/*
 * This file is part of sebastian/complexity.
 *
 * (c) Sebastian Bergmann <sebastian@phpunit.de>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
namespace SebastianBergmann\Complexity;

use function file_get_contents;
use PhpParser\Lexer;
use PhpParser\NodeTraverser;
use PhpParser\Parser;
use PhpParser\ParserFactory;
use PHPUnit\Framework\Attributes\CoversClass;
use PHPUnit\Framework\Attributes\Small;
use PHPUnit\Framework\TestCase;

#[CoversClass(CyclomaticComplexityCalculatingVisitor::class)]
#[Small]
final class CyclomaticComplexityCalculatingVisitorTest extends TestCase
{
    public function testCalculatesCyclomaticComplexityForAbstractSyntaxTree(): void
    {
        $nodes = $this->parser()->parse(
            file_get_contents(__DIR__ . '/../_fixture/example_function.php')
        );

        $traverser = new NodeTraverser;

        $visitor = new CyclomaticComplexityCalculatingVisitor;

        $traverser->addVisitor($visitor);

        /* @noinspection UnusedFunctionResultInspection */
        $traverser->traverse($nodes);

        $this->assertSame(14, $visitor->cyclomaticComplexity());
    }

    private function parser(): Parser
    {
        return (new ParserFactory)->create(ParserFactory::PREFER_PHP7, new Lexer);
    }
}

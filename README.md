# Set

Set is (currently) a desktop only React game is based on The Set® Card Game, which I love to play with friends and family whenever I get the opportunity. The reason for choosing this project was two-fold, it's something I'm personally pasisonate about, and also an excellent way to gain experience managing variables and the algorithms that go with them. It is worth noting that this project is strictly that; I have no intentions on making money from this game, or am in any way trying to take credit for the idea. If you like my project, please consider checking out The Set® Card Game, owned by Set Enterprises, Inc., a part of PlayMonster LLC.

## Goals

My goal for this project was to make the cards customizable, which proved much more difficult than I was expecting. Players can change the card's shape, pattern, and color during the game without losing progress. Games are also a great way to try and solve a variety of interesting design challenges, and this project certainly had a few.

## Development

- To allow the player to customize the cards, I wrote the deck object to display the cards relative to 3 array indices of the user data.
- Each shape and pattern was custom made by me, all to work with a constant size viewbox in an SVG React component.
- I ended up using SVGs since they are the only format that can accept stroke and fill color values at runtime without the use of CSS filters.
- The shapes are stored as SVG <path> strings, the patterns as SVG <patterns> which inserted using JSX, and the colors in hex.

## Next Steps

As I have learned more about SVGs, I've found them to be incredibly versatile, particularly relative to client inputs. But they are also kind of a pain, Safari has given me a lot of compatability issues that I am still working to resolve. Going forward, I want to add a multiplayer option so I can play online with my family and a database to store user customizations and game statistics.

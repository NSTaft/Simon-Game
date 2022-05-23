SIMON

Test your memory by matching the randomized pattern displayed during each round. Beginning with 1 panel in round 1, each round will progressively speed up the display, add a panel to the sequence, and decreases your allowed reaction time.


Technologies Used
HTML
CSS
JavaScript (logic and DOM manipulation)

Wireframes:
what game will look like


Grid with 5 different colored panels, 4 forming the outer perimeter and 1 in the middle.

Start button in the middle - Round indicator at the top

Computer randomly chooses a panel(s), incrementing as game progresses
    Player "locked out" of clicking on game board at this time
    Panel lights up, plays sound effect
    Function pauses after initial round selection, replays for player to watch again.
    Switch to player turn

Player must select same panel(s) in the same order as computer
    Player click now available.
    Must select same order as computer before a timeout.
    If timeout or player input is incorrect, 
        display GAME OVER message.

After every 3 levels-
    Computer selection speeds up
    Player timeout is shorter


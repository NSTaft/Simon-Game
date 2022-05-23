SIMON

Premise: Test your memory by matching the pattern displayed during each round. Rounds will progressively speed up the display and limit your time to hesitate.
User Story
As a user I want to
.
.
.
.
.
.
Technologies Used
HTML
CSS
JavaScript (logic and DOM manipulation)
Canvas (Optional)
Wireframes:
what game will look like


Circle with 5 different colored panels, 4 forming the outer ring and 1 circle in the middle.

Start button - Round indicator

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


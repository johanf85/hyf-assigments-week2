One of this week's assignments was to recreate a responsive homepage of a large brand. I chose [Patreon.com](www.patreon.com).

*   Recreated the menu and made it resemble the mobile menu and the desktop menu. 
*   Used Fontawesome for the Patreon logo, as it was difficult to use the SVG on their website (their website used css classes to color)
*   Tried to minimize the use unnecessary of divs or other elements 
*   Responsive, most of the changes are set on the 992px limit
*   Used flexbox a lot, tried grid at first too, but wasn't needed to achieve what I wanted. Thought maybe later, but ended up spending time on responsiveness and didn't apply grid anymore.
*   Each userstory has same HTML structure, however above 992px one of the two is mirrored by using flex-direction: row-reverse. This is set by using just one class "UserStoryMirrored". Could have used odd/even as well, but went for this now. 
*   Added a little bit of javascript (jQuery) in a seperate file, to toggle a class on the mobile menu items.

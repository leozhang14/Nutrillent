
# Reconfig of Nutrillent Website

Originally named "GLED Nutrient Tracker" and created as a prototype for the online virtual hackathon "Hack the Pulse 2022".
https://devpost.com/software/hackthepulse
Collaborators:
Grace G.
Emma D.
Dora C.

After the hackathon ended, I finished programming the web app on my own and renamed it to "Nutrillent". As my skills improve, I hope to continue working on this project and continue to make it better. Recent updates include using React to allow table row deletion and editing with a running total.

Upcoming improvements:

Short-term:
 - useMemo to cache calculations of nutritional data between re-renders of the Modal component
 - Table UI (weird edges)
 - Proper UI libraries (Bootstrap, Chakra UI)
 - useCallback to cache function definitions between re-renders based on dependencies (use for updating rowMultipliers)
 - Optimizing the rendering of code (cleaner code by mapping from a state variable)
   
EXAMPLE:
{arr.map((item, i) => (
  <div key={i}>
    <p className="info">{item[0]} | {item[1]}</p>
    <p>{item[2]}</p>
  </div>
))}

- Combine state batches (errors)

Long-term:
- Transition from static to dynamic website (Node + Express)
  - Possibly MERN stack
- Add user authentication with OAuth (react-google-login library)
  - Manage user sessions with cookies/tokens
- Software for users to visualize their nutritional data (D3.js)
- Mobile responsiveness?
  
Nutritional information was retrieved from the US Department of Agriculture (USDA) FoodData Central API.

Deployed using Microsoft Azure.

https://zealous-coast-053a22410.4.azurestaticapps.net/

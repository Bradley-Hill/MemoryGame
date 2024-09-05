# MemoryGame

Simple Memory Game with React/NextJS

API for use : https://scryfall.com/docs/api

# Rough PLan for the project:

### Stage 2: Basic Structure and Routing

1. **Create App Directory Structure**

   - Set up the `app/` directory with subdirectories for `api`, `components`, `styles`, `utils`, `hooks`, and `context`.

2. **Create Main Page**

   - Create `page.tsx` as the main entry point for the application.

3. **Set Up API Route**
   - Create `api/cards/route.ts` to handle fetching card data from the Scryfall API.

### Stage 3: UI Components

1. **Card Component**

   - Create `Card.tsx` to display individual cards.
   - Style the component using `Card.module.css`.

2. **GameBoard Component**

   - Create `GameBoard.tsx` to display the game board with cards.
   - Style the component using `GameBoard.module.css`.

3. **ScoreBoard Component**

   - Create `ScoreBoard.tsx` to display the current and best scores.
   - Style the component using `ScoreBoard.module.css`.

4. **DifficultySelector Component**
   - Create `DifficultySelector.tsx` to allow users to select the game difficulty.
   - Style the component using `DifficultySelector.module.css`.

### Stage 4: State Management

1. **Game State Hook**

   - Create `useGameState.ts` to manage the game state, including the current score, best score, and clicked cards.

2. **Game Context**
   - Create `GameContext.tsx` to provide game state across components.

### Stage 5: Game Logic

1. **Utility Functions**

   - Create `gameLogic.ts` in the `utils/` directory to handle game logic such as shuffling cards and checking for duplicates.

2. **API Utility**
   - Create `api.ts` in the `utils/` directory to handle API calls to the Scryfall API.

### Stage 6: Integration and Testing

1. **Integrate Components**

   - Integrate all components (`Card`, `GameBoard`, `ScoreBoard`, `DifficultySelector`) into `page.tsx`.

2. **Fetch and Display Data**

   - Use the API route to fetch card data and display it on the game board.

3. **Implement Game Logic**

   - Implement the game logic to handle card clicks, update scores, and check for previously clicked cards.

4. **Testing**
   - Test the application thoroughly to ensure all components and logic work as expected.

### Stage 7: Final Touches

1. **Styling and Responsiveness**

   - Ensure the application is styled properly and is responsive across different devices.

2. **Performance Optimization**

   - Optimize the application for performance, including lazy loading images and minimizing API calls.

3. **Documentation**

   - Update the [`README.md`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2FKingm%2FDocuments%2FCodeRepos%2FMemoryGame%2FREADME.md%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%5D "c:\\Users\Kingm\Documents\CodeRepos\MemoryGame\README.md") with instructions on how to set up and run the project.

4. **Deployment**
   - Deploy the application to a hosting service like Vercel.

By following these stages and steps, you can systematically build your Next.js memory game with TypeScript and Tailwind CSS.

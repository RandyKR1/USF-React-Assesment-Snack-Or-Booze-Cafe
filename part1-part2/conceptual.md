### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?
  + To build single-page applications with navigation that does not refresh the entire page through dynamic routing. 

- What is a single page application?
  + Web applications that only load a single HTML page that can update dynamically as the user interacts with the page, without fully refreshing the page. This provides a more fluid and user firendly experience.

- What are some differences between client side and server side routing?
  + Client-Side Routing:
          + The routing logic is handled in the browser using JavaScript.
          + The initial load fetches the main HTML, CSS, and JavaScript files.
          + Navigation updates the URL and changes the view without refreshing the entire page.
          + Provides a smoother and faster user experience since only the necessary parts of the page are updated.
  
  + Server-Side Routing:
          + The routing logic is handled on the server.
          + Each navigation request results in a new HTML page being served by the server.
          + Can result in slower navigation due to full page reloads.

- What are two ways of handling redirects with React Router? When would you use each?
  + <Navigate to="/" />
    + Use when you want to redirect based on some condition inside a component's render method.

  + const navigate = useNavigate(); navigate('/new-path');
    + Use when you need to perform a redirect in response to an event, such as a form submission or a button click


- What are two different ways to handle page-not-found user experiences using React Router? 
  + <Route path="*" element={<NotFound />} />
    + display a custom 404 page for any unmatched route.

  + {validPaths.includes(currentPath) ? <ValidComponent /> : <NotFound />}
    + for more control over the rendering logic and to potentially provide suggestions or alternative links.

- How do you grab URL parameters from within a component using React Router?
  + 
      import { useParams } from 'react-router-dom'; 
      const ItemTemplate = ({items}) => {
      const { name } = useParams();

      const item = items.find(item => item.name.toLowerCase() === name.toLowerCase());
      if (!item) return <Navigate to="/" />;

- What is context in React? When would you use it?
  + Context provides a way to share values between components without explicitly passing props through every level of the component tree.
  + When you have data that needs to be accessible by many nested components and passing props down manually becomes cumbersome. Typically in larger applications

- Describe some differences between class-based components and function
  components in React.
  + Class-Based Components:
    + Use ES6 class syntax.
    + Can have lifecycle methods (e.g., componentDidMount, shouldComponentUpdate).
    + Use this keyword to access props and state.
  
  + Function Components:
    + Use plain JavaScript functions (also JSX)
    + Do not have lifecycle methods directly; use hooks (e.g., useEffect, useState) instead.
    + Generally simpler and easier to read and test.


- What are some of the problems that hooks were designed to solve?
    Code Reusability - allowing for the extraction and reuse of stateful logic across different components.

    Cleaner and More Readable Code: - a way to split component logic into smaller, reusable functions, leading to more maintainable and readable code.

    State and Side Effects: - Hooks like useState and useEffect provide a way to use state and side effects in function components, which was previously only possible in class components.
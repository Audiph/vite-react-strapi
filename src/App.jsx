import { useGlobalContext } from './utils/context';

const App = () => {
  const { isSidebarOpen } = useGlobalContext();
  console.log(isSidebarOpen);
  return <h2>Strapi Starter</h2>;
};
export default App;

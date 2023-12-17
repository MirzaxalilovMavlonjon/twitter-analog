import "./AppHeader.css";
const AppHeader = ({ liked, allPosts }) => {
  return (
    <div className="app-header d-flex">
      <h1>Mavlonjon Mirzaxalilov</h1>
      <h2>
        {allPosts} Tasks, like {liked}
      </h2>
    </div>
  );
};

export default AppHeader;

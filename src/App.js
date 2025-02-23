import AppLayout from "./components/AppLayout";
import { Toaster } from "react-hot-toast";
import { useState } from "react";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [projectTitle, setProjectTitle] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [projectDetails, setProjectDetails] = useState([]);

  const handleLogin = () => {
    if (username === "rec" && password === "12345678") {
      setIsLoggedIn(true);
    } else {
      alert("Invalid username or password");
    }
  };

  const handleSubmitProject = () => {
    if (projectTitle && projectDescription) {
      setProjectDetails([...projectDetails, { title: projectTitle, description: projectDescription }]);
      setProjectTitle("");
      setProjectDescription("");
    } else {
      alert("Please fill in both title and description");
    }
  };

  return (
    <AppLayout>
      <Toaster position="top-right" gutter={8} />
      {isLoggedIn ? (
        <div className="flex flex-row w-full">
          <div className="w-1/2 p-10">
            <h1 className="text-lg text-gray-600">Create Project</h1>
            <input
              type="text"
              value={projectTitle}
              onChange={(e) => setProjectTitle(e.target.value)}
              placeholder="Project Title"
              className="p-2 border border-gray-400 w-full"
            />
            <textarea
              value={projectDescription}
              onChange={(e) => setProjectDescription(e.target.value)}
              placeholder="Project Description"
              className="p-2 border border-gray-400 w-full"
            />
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleSubmitProject}
            >
              Submit
            </button>
          </div>
          <div className="w-1/2 p-10">
            {projectDetails.length > 0 && (
              <div>
                <h2 className="text-lg text-gray-600">Project Details</h2>
                <ul>
                  {projectDetails.map((project, index) => (
                    <li key={index} className="mb-4">
                      <h3 className="text-md text-gray-600 font-bold">Project Title:</h3>
                      <p className="text-sm text-gray-600">{project.title}</p>
                      <h3 className="text-md text-gray-600 font-bold">Project Description:</h3>
                      <p className="text-sm text-gray-600">{project.description}</p>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center w-full pt-10">
          <h1 className="text-3xl font-bold mb-4">PROJECT TRACK</h1>
          <h2 className="text-lg text-gray-600">Login</h2>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            className="p-2 border border-gray-400"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="p-2 border border-gray-400"
          />
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleLogin}
          >
            Login
          </button>
        </div>
      )}
    </AppLayout>
  );
}

export default App;
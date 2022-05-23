import { useParams, Navigate, useNavigate, Routes, Route } from 'react-router-dom';

function Post() {
  const params = useParams();
  const navigate = useNavigate();

  const status = 200;

  if (status === 404) {
    return <Navigate to={`/notfound`} />; // return element to navigate
  } else {
    setTimeout(() => {
      navigate('/about'); // use hook to navigate
    }, 5000);
  }

  const handleClick = () => {
    navigate('/about'); // use hook to navigate
  };

  return (
    <div>
      <h1>Post {params.id}</h1>
      <p>Name: {params.name}</p>
      <br />
      <p>Click to redirect or you will automatically redirected in 5 secs</p>
      <button onClick={handleClick}>Click</button>
      <Routes>
        {/* Nested Routes */}
        <Route path="/show" element={<h1>Hello World</h1>} /> {/* need /* on the parent Router's route*/}
      </Routes>
    </div>
  );
}
export default Post;

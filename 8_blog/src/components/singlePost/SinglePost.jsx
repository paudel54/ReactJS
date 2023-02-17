import "./singlepost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://images.unsplash.com/photo-1642402734506-d764bed0a902?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
          alt=""
          className="singlePostImg"
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet consectetur iusto.
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>North Korean Dev</b>
          </span>

          <span className="singlePostDate">
            Author: <b>1 hour ago</b>
          </span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem
          earum eveniet delectus sapiente similique dolores ratione? Eius fugit,
          facilis blanditiis, similique accusantium vitae nihil magnam, harum
          perspiciatis nulla rem tenetur. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Sequi ex dicta consequuntur provident in. Fugit
          vitae odit iste ipsa ad dicta obcaecati optio illo sapiente, quis
          officiis asperiores incidunt quo!. Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Dolorem earum eveniet delectus sapiente
          similique dolores ratione? Eius fugit, facilis blanditiis, similique
          accusantium vitae nihil magnam, harum perspiciatis nulla rem tenetur.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ex
          dicta consequuntur provident in. Fugit vitae odit iste ipsa ad dicta
          obcaecati optio illo sapiente, quis officiis asperiores incidunt quo!
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem
          earum eveniet delectus sapiente similique dolores ratione? Eius fugit,
          facilis blanditiis, similique accusantium vitae nihil magnam, harum
          perspiciatis nulla rem tenetur. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Sequi ex dicta consequuntur provident in. Fugit
          vitae odit iste ipsa ad dicta obcaecati optio illo sapiente, quis
          officiis asperiores incidunt quo!
        </p>
      </div>
    </div>
  );
}

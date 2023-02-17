import "./post.css";
function Post() {
  return (
    <div className="post">
      POST
      <img
        className="postImg"
        src="https://images.unsplash.com/photo-1580424917967-a8867a6e676e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat"> Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum, dolor sit amet.</span>
        <span className="postDate">1 hour ago.</span>
        <p className="postDesc">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae
          saepe, dolorem nostrum delectus neque impedit deleniti! Cumque
          doloribus, nobis omnis officia dolore voluptate asperiores corporis
          sequi ipsum obcaecati id voluptatem? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Perspiciatis iure eligendi quas!
          Corrupti obcaecati repellendus, officiis placeat nemo, totam neque
          quidem perferendis ducimus eos molestiae quo distinctio voluptatibus
          quam mollitia! Lorem ipsum dolor sit amet consectetur, adipisicing
          elit. Ipsum pariatur ad consectetur fuga reiciendis cumque ipsa
          delectus quibusdam repudiandae quod et animi dicta, vel eaque
          accusantium tenetur fugit nostrum perferendis.
        </p>
      </div>
    </div>
  );
}

export default Post;

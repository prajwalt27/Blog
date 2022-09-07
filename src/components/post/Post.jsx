import "./post.css";
import React from "react";
export default function Post() {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://neilpatel.com/wp-content/uploads/2018/10/blog.jpg"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">lorem ipsum dolat rit sdf</span>
        <hr />
        <span className="postDate"> 1 hr ago</span>
      </div>
      <p className="postDesc">
          oremmfhajsdhfw8rh jikh nijtdfadjflwehfuh[df 
          fdsjfiwuehf8pwe]  jikh jik jifsdkfa;sdkfjij
          jdfuw9ep9fh;djfahdjfhu fdfjsdfhalsdjhfaulseif
          jdhflajfhwehfljdhfadhfweuhp9w8rykfhlsdjhfljdf
          oremmfhajsdhfw8rh jikh nijtdfadjflwehfuh[df 
          fdsjfiwuehf8pwe]  jikh jik jifsdkfa;sdkfjij
          jdfuw9ep9fh;djfahdjfhu fdfjsdfhalsdjhfaulseif
          jdhflajfhwehfljdhfadhfweuhp9w8rykfhlsdjhfljdf
          oremmfhajsdhfw8rh jikh nijtdfadjflwehfuh[df 
          fdsjfiwuehf8pwe]  jikh jik jifsdkfa;sdkfjij
          jdfuw9ep9fh;djfahdjfhu fdfjsdfhalsdjhfaulseif
          jdhflajfhwehfljdhfadhfweuhp9w8rykfhlsdjhfljdf
      </p>
    </div>
  );
}

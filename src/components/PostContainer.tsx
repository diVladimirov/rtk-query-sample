import React from "react";
import { IPost } from "../models/IPost";
import { postApi } from "../services/PostService";
import PostItem from "./PostItem";

const PostContainer = () => {
  const { data: posts, error, isLoading } = postApi.useFetchAllPostsQuery(15);
  const [createPost, {}] = postApi.useCreatePostMutation();
  const [udpatePost, {}] = postApi.useUpdatePostMutation();
  const [deletePost, {}] = postApi.useDeletePostMutation();

  const HandleCreate = async () => {
    const title = prompt();
    await createPost({ title, body: title } as IPost);
  };

  const handleRemove = (post: IPost) => {
    deletePost(post);
  };

  const handleUpdate = (post: IPost) => {
    udpatePost(post);
  };
  return (
    <div>
      <button onClick={HandleCreate}>Add new post</button>
      {isLoading && <h1>Loading</h1>}
      {error && <h1>An error occurred while loading </h1>}
      <ul>
        {posts?.map((post) => (
          <PostItem
            remove={handleRemove}
            update={handleUpdate}
            key={post.id}
            post={post}
          />
        ))}
      </ul>
    </div>
  );
};

export default PostContainer;

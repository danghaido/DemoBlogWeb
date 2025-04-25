import { useState } from "react";
import { useForm } from "react-hook-form";

export default function NewPost() {
  const [newPost, setNewPost] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch("http://localhost:8080/api/post", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setNewPost("Post created successfully!");
      } else {
        setNewPost("Post created failed!");
      }
    } catch (error) {
      console.error("Error creating data:", error);
      setNewPost("Post created failed!");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Slug:</label><br />
        <input type="text" {...register("slug", { required: true })} />
        {errors.slug && (
          <div>Slug is required</div>
        )}
      </div>

      <div>
        <label>Title:</label><br />
        <input type="text" {...register("title", { required: true })} />
        {errors.title && (
          <div>Title is required</div>
        )}
      </div>

      <div>
        <label>Description:</label><br />
        <input type="text" {...register("description", { required: true })} />
        {errors.description && (
          <div>Description is required</div>
        )}
      </div>

      <button type="submit">Add New</button>

      {newPost && (
        <p>{newPost}</p>
      )}
    </form>
  );
}

import React from "react";
import { useForm } from "react-hook-form";
import apiBook from "../../../API/apiBook";

function TestUploadFile() {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
      const formData = new FormData();
      formData.append("images", data.file[0]);
      apiBook.test(formData)
  };

  return (
      <div className="App">
          <form onSubmit={handleSubmit(onSubmit)}>
              <input type="file" {...register("file")} />

              <input type="submit" />
          </form>
      </div>
  );
}

export default TestUploadFile;
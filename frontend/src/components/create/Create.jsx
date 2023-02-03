import React from "react";
import classes from "./create.module.css";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Create = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [review, setReview] = useState("");
  const [category, setCategory] = useState("");
  const navigate = useNavigate();

  const { token } = useSelector((state) => state.auth);

  const onChangeFile = (e) => {
    setImage(e.target.files[0]);
  };

  const handleCloseImg = () => {
    setImage('');
  };

  const handleCreateProduct = async (e) => {
    e.preventDefault()

    try {
      const formData = new FormData();
      let filename = null;

      if (image) {
        filename = Date.now() + image.name;
        formData.append("filename", filename);
        formData.append("image", image);

        await fetch(`http://localhost:4455/upload/image`, {
          headers: {
            "Authorization": `Bearer ${token}`,
          },
          method: "POST",
          body: formData,
        });
      }

      //uploading product
      const res = await fetch(`http://localhost:4455/product`, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        method: "POST",
        body: JSON.stringify({
          title,
          desc,
          category,
          img: filename,
          price,
          review,
        }),
      });

      const food = await res.json();

      navigate(`/food/${food._id}`);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <h2 className={classes.title}>Criar comida</h2>
        <form onSubmit={handleCreateProduct} encType="multipart/form-data">
          <div className={classes.inputWrapper}>
            <label> Título:</label>
            <input
              type="text"
              placeholder="Título..."
              className={classes.input}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className={classes.inputWrapper}>
            <label> Descrição:</label>
            <input
              type="text"
              placeholder="Descrição..."
              className={classes.input}
              onChange={(e) => setDesc(e.target.value)}
            />
          </div>
          <div className={classes.inputWrapper}>
            <label> Categoria:</label>
            <input
              type="text"
              placeholder="Categoria..."
              className={classes.input}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
          <div className={classes.inputWrapperImage}>
            <label htmlFor="image" className={classes.labelFileInput}>
              Imagem: <span>Upload aqui</span>
            </label>
            <input
              type="file"
              placeholder="Imagem..."
              id="image"
              className={classes.input}
              onChange={onChangeFile}
              style={{ display: 'none' }}
            />
            {image && (
              <p className={classes.imageName}>
                {image.name}
                <AiOutlineCloseCircle
                  onClick={handleCloseImg}
                  className={classes.closeIcon}
                />
              </p>
            )}
          </div>
          <div className={classes.inputWrapper}>
            <label> Preço:</label>
            <input
              type="number"
              placeholder="Preço..."
              step={0.01}
              className={classes.input}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className={classes.inputWrapper}>
            <label> Review:</label>
            <input
              type="number"
              placeholder="Review..."
              step={0.1}
              min={1}
              max={5}
              className={classes.input}
              onChange={(e) => setReview(e.target.value)}
            />
          </div>

          <div className={classes.buttonWrapper}>
            <button type="submit" className={classes.submitBtn}>
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Create;

export const GifItem = ({ id, title, url, onDelete }) => {
  return (
    <div className="card">
      <img src={url} alt={title} />
      <p>{title}</p>
      <button onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
};

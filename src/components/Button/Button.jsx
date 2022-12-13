import '../../styles.css';

export default function Button ({ onClick }) {
    return (
        <div className="ButtonArea">
         <button onClick={onClick} className="Button" type='button'>
          Load more
        </button>
        </div>
    )
}
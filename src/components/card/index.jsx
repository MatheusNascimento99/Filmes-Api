import PropTypes  from "prop-types";

function Card({ filmes }) {
    return (
        <div className="col-md-4">
            <div >
                <img src={filmes.Poster} />S
                <h5>
                    {filmes.Title}
                </h5>
                <p>{filmes.Year}</p>
                <p>{filmes.Type}</p>
            </div>
        </div>
    )
}


Card.propTypes = {
    filmes: PropTypes.shape({
        Poster: PropTypes.string,
        Title: PropTypes.string,
        Year: PropTypes.number,
        Type: PropTypes.string
    })
};



export default Card
import './Search.css'

export default function Search(props) {
  return (
    <section className="search-bar">
      <label className="search-bar-label" htmlFor="search-bar-input">
        Search for character
      </label>
      <input
        id="search-bar-input"
        className="search-bar-item"
        onChange={props.handleSearch}
        type="text"
        value={props.search}
        placeholder="search for character"
      />
      <label className="search-bar-label" htmlFor="search-bar-checkbox">
        only Alive
      </label>
      <input
        className="search-bar-item"
        id="search-bar-checkbox"
        type="checkbox"
        checked={props.checkedAlive}
        onChange={props.handleIsAlive}
      />
      <p className="search-bar-label">total characters found: {props.count}</p>
    </section>
  )
}

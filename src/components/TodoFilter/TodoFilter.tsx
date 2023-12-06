export type FilterType = 'all' | 'active' | 'completed';

export type TodoFilterProps = {
  selectType: FilterType
  setSelectType: (filter: FilterType) => void
  query: string
  setQuery: (query: string)=> void
};

export const TodoFilter = ({
  selectType, setSelectType, query, setQuery,
}: TodoFilterProps) => (

  <form className="field has-addons">
    <p className="control">
      <span className="select">
        <select
          data-cy="statusSelect"
          value={selectType}
          onChange={(e) => setSelectType(e.target.value as FilterType)}
        >
          <option value="all">All</option>
          <option value="active">Active</option>
          <option value="completed">Completed</option>
        </select>
      </span>
    </p>

    <p className="control is-expanded has-icons-left has-icons-right">
      <input
        data-cy="searchInput"
        type="text"
        className="input"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <span className="icon is-left">
        <i className="fas fa-magnifying-glass" />
      </span>

      <span className="icon is-right" style={{ pointerEvents: 'all' }}>
        {query && (
          /* eslint-disable-next-line jsx-a11y/control-has-associated-label */
          <button
            data-cy="clearSearchButton"
            type="button"
            className="delete"
            onClick={() => setQuery('')}
          />
        )}
      </span>
    </p>
  </form>
);

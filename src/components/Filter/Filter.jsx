import css from './Filter.module.css';
// import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/filterSlice';
import { getFilter } from '../../redux/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const handleFilterChange = e => {
   dispatch(setFilter(e.target.value));
  };


  return (
    <div className={css.container}>
      <p className={css.findName}>Find Contacts by Name</p>
      <input
        className={css.filterInput}
        type="text"
        name="filter"
        placeholder="Search by name"
        value={filter}
        onChange={handleFilterChange}
      />
    </div>
  );
};

// Filter.propTypes = {
//   filter: PropTypes.string.isRequired,
//   setFilter: PropTypes.func.isRequired,
// };
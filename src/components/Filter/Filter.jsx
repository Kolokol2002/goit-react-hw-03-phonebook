import { ContainerFilter, TitleFilter, InputFilter } from './Filter.styled';
import PropTypes from 'prop-types';

function Filter({ handleFilter }) {
  return (
    <ContainerFilter>
      <TitleFilter>Find number</TitleFilter>
      <InputFilter type="text" name="filter" onChange={handleFilter} />
    </ContainerFilter>
  );
}

Filter.propTypes = {
  handleFilter: PropTypes.func.isRequired,
};

export default Filter;

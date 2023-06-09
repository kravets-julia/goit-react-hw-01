import PropTypes from 'prop-types'
import { Data } from "./Statistics"
import css from 'components/Statistics/Statistics.module.css'


export const StatisticsList = ( {data} ) => {
    return (
        <ul className={css.stat}>
            {data.map(data => (
                <li key={data.id}>
                    <Data data={data} />
                </li>
            ))}
        </ul>
    )
}

StatisticsList.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
      })
    )
  }

//   function getRandomHexColor() {
//     return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
//   }
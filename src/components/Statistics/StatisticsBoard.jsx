import PropTypes from 'prop-types'
import { StatisticsList } from "./StatisticsList"
import css from 'components/Statistics/Statistics.module.css'


export const StatisticsBoard = ({ data }) => {
    return (
        <section className={css.statistics}>
        <h2 className={css.title}>{data.title ?? "Upload stats"} </h2>
        <StatisticsList data={data}/>
        </section>  
    )
}

StatisticsBoard.propTypes = {
    title: PropTypes.string, 
  }
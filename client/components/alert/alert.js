import PropTypes from 'prop-types'
import classNames from 'classnames'
import styles from './alert.module.css'

export default function Alert({children, type}) {
  return (
    <div 
      className={classNames(styles.alert, {
        [styles.success]: type === 'success',
        [styles.error]: type === 'error',
        [styles.warning]: type === 'warning',
      })}
    >
      {children}
    </div>
  )
}

Alert.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['success', 'warning', 'error']),
}
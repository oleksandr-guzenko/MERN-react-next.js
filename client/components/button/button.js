import PropTypes from 'prop-types'
import classNames from 'classnames'
import styles from './button.module.css'

export default function Button({
  children,
  className,
  disabled,
  onClick,
  type,
  ...props
}) {
  return (
    <button
      className={classNames(styles.button, className, {
        [styles.button-disabled]: disabled,
      })}
      disabled={disabled}
      onClick={onClick}
      type={type}
      {...props}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  type: PropTypes.string,
}
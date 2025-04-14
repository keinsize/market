import { FC, PropsWithChildren } from 'react'

import styles from './NotFound.module.scss'
import { Svg } from './Svg'

const NotFound: FC<PropsWithChildren<unknown>> = ({ children }) => {
	return (
		<div className={styles.notFound}>
			{children}
			<Svg />
		</div>
	)
}

export default NotFound

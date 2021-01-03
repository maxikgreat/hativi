import {Dispatch, SetStateAction, VFC} from 'react';import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';import {faExternalLinkAlt, faSortAmountUp, faStar} from '@fortawesome/free-solid-svg-icons';import {SortMethodState} from '@pagesComponents/findBloger/People';interface SortProps {	sortMethod: SortMethodState,	setSortMethod: Dispatch<SetStateAction<SortMethodState>>}export const Sort: VFC<SortProps> = ({sortMethod, setSortMethod}) => (	<div className="d-flex justify-content-start justify-content-md-end align-items-end mb-3 w-100">		<span className="d-none d-md-inline-block mr-2">sort by</span>		<div			className={`fabrx-chip mr-2 ${sortMethod.type === 'new' && 'bg-primary'}`}			onClick={() => sortMethod.type !== 'new' && setSortMethod(prevState => ({...prevState, type: 'new'}))}		>			<FontAwesomeIcon icon={faExternalLinkAlt} />			<span>newest</span>		</div>		<div			className={`fabrx-chip mr-3 ${sortMethod.type === 'followers' && 'bg-primary'}`}			onClick={() => sortMethod.type !== 'followers' && setSortMethod(prevState => ({...prevState, type: 'followers'}))}		>			<FontAwesomeIcon icon={faStar} />			<span>followers</span>		</div>		<FontAwesomeIcon			icon={faSortAmountUp}			className="mb-2"			color={sortMethod.reverse ? '#f39933' : '#fff'}			onClick={() => setSortMethod(prevState => ({...prevState, reverse: !prevState.reverse}))}		/>	</div>)
import {Dispatch, SetStateAction, useState, VFC} from 'react';import Select from 'react-select'import {categories, Category as CategoryType} from '@/types';import {CategoryMobile} from '@/pages/find_bloger';interface CategoriesMobileProps {	activeCategoryMobile: CategoryMobile[],	setActiveCategoryMobile: Dispatch<SetStateAction<CategoryMobile[]>>,}export const CategoriesMobile: VFC<CategoriesMobileProps> = ({ activeCategoryMobile, setActiveCategoryMobile }) => {	const renderCategories = () => categories.map((category) => ({		label: category,		value: category	}));		return (		<div className="d-block d-md-none mb-4">			<h3 className="d-inline-block">Category</h3>			<Select				isMulti				options={renderCategories()}				classNamePrefix="react-select"				value={activeCategoryMobile}				onChange={(value, actionMeta) => {					const {action} = actionMeta;					if (action === 'select-option') {						return setActiveCategoryMobile(value as CategoryMobile[]);					}					if (action === 'clear') {						return setActiveCategoryMobile([]);					}					if (action === 'remove-value') {						return setActiveCategoryMobile(							prevState => prevState.filter(({ value }) => value !== actionMeta.removedValue?.value)						)					}				}}			/>		</div>	)};
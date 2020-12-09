import { FC, useState } from 'react';
import { faHandHoldingUsd, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

import { isCategory, isNumber } from '@/helpers';
import { categories, Category, InstagramMetadata, InstaUser } from '@/types';
import { Input } from '@/components/common';
import { faList } from '@fortawesome/free-solid-svg-icons';
import {DeepMap, FieldError} from 'react-hook-form';
import {FirstEnterForm} from '@/pages/first_enter';
export interface PriceValueForm {
  story: string,
  post: string,
}
interface CategoryFormProps {
  register: any,
  errors: DeepMap<FirstEnterForm, FieldError>,
  instaUser: InstaUser,
  updateMetadataLoading: boolean,
}

export const CategoryPriceForm: FC<CategoryFormProps> = ({
  register,
  errors,
  instaUser,
  updateMetadataLoading
}) => {
  const [desc, setDesc] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState<PriceValueForm>({
    story: '',
    post: '',
  });

  const onChange = (value: string, name: 'post' | 'story') => {
    let str = value;
    if (str.includes(',')) str = str.replace(',', '.');
    setPrice(prevState => ({
      ...prevState,
      [name]: str,
    }));
  }

  const checkAllFieldsPassed = () =>
    isCategory(category) && (isNumber(price.story) && isNumber(price.post)) && desc.length > 30

  const charactersRemain = () => `${30 - desc.length} characters remain`;

  return (
    <div className={`tab-pane fade`} id="CategoryAndPrice" role="tabpanel">
      <div className="row hero-caption pt-4">
        <div className="col-12">
          <Input
            register={register}
            textarea={true}
            name="desc"
            placeholder="Short description"
            icon={faInfoCircle}
            // onChange={({ target: { value }}) => setDesc(value)}
            label={() => (
              <small>Tell us a short story about your bla bla bla...
                <span className="text-primary">
                  {
                    30 - desc.length > 0
                      ? charactersRemain()
                      : null
                  }
                </span>
              </small>
            )}
            error={errors.socialMedia?.desc}
          />
        </div>
        
        <div className="col-12">
          <datalist id="categories">
            {categories.map(category => <option key={category} value={category} />)}
          </datalist>
          <Input
            register={register}
            list="categories"
            name="category"
            placeholder="Category"
            icon={faList}
            // onChange={({ target: { value }}) => setCategory(value)}
            label={() => <small>To continue, pick category from <span className="text-primary">existing one</span></small>}
            error={errors.socialMedia?.category}
          />
        </div>
        <div className="col-12 col-md-6">
          <Input
            icon={faHandHoldingUsd}
            name="pricePerStory"
            placeholder="Price per story"
            // value={price.story}
            // onChange={({ target: { value }}) => onChange(value, 'story')}
            error={errors.socialMedia?.pricePerStory}
          />
        </div>
        <div className="col-12 col-md-6">
          <Input
            register={register}
            icon={faHandHoldingUsd}
            name="pricePerPost"
            placeholder="Price per post"
            // value={price.post}
            // onChange={({ target: { value }}) => onChange(value, 'post')}
            error={errors.socialMedia?.pricePerPost}
          />
        </div>
        <p style={{transform: 'translateY(-15px)'}}>Fill price fields <span className="text-primary">with digits.</span> All prices will be in dollars</p>
        <div className="d-flex justify-content-end">
          <button
            className={`btn btn-link mt-2 mb-3 mb-md-0 ${!checkAllFieldsPassed() && 'disabled'}`}
            // onClick={() => finishHandler({
            //   user: instaUser,
            //   desc,
            //   category: category as Category,
            //   price: {
            //     story: Number(price.story),
            //     post: Number(price.post),
            //   },
            // })}
            style={{zIndex: 10}}
          >
            {
              updateMetadataLoading
                ? <div className="spinner-border spinner-border-sm spinner-fill" />
                : <>
                    <span className="btn-text">Finish</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                      <path data-name="Icon Color" d="M10.909,5.818H0V2.909H10.909V0L16,4.243,10.909,8.485Z" transform="translate(0 4)" fill="#006eff"></path>
                    </svg>
                  </>
            }
          </button>
        </div>
      </div>
    </div>
  )
};

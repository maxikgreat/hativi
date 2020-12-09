import React, { Dispatch, SetStateAction, VFC } from "react";
import { animated, useSpring, useTransition } from 'react-spring';
import { isMobile } from 'react-device-detect';
import {DeepMap, FieldError, FieldName} from 'react-hook-form';

import { InstagramMetadata, Role } from "@/types";
import { InfoForm } from './';
import { FirstEnterForm, InfoValueForm } from "@/pages/first_enter";


interface PickRoleProps {
  register: any,
  errors: DeepMap<FirstEnterForm, FieldError>,
  toggler: boolean,
  trigger: (name?: FieldName<FirstEnterForm> | FieldName<FirstEnterForm>[] | undefined) => Promise<boolean>,
  setToggler: Dispatch<SetStateAction<boolean>>,
  setRoleHandler: (role: Role) => void,
  customEmailLabel: () => JSX.Element,
}

export const PickRole: VFC<PickRoleProps> = ({
  register,
  errors,
  toggler,
  trigger,
  setToggler,
  setRoleHandler,
  customEmailLabel,
}) => {
  const { transform, opacity } = useSpring({
    opacity: toggler ? 1 : 0,
    transform: `perspective(600px) rotateX(${toggler ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 }
  });
  
  const transitions = useTransition(1, item => item, {
    from: {
      opacity: 0,
      transform: 'translateX(100%)'
    },
  	enter: {
  	  opacity: 1,
      transform: 'translateY(0)'
    },
    leave: {
      opacity: 0,
      transform: 'translateX(-100%)'
    }
  });
  
  return (
    <>
      {
        transitions.map(({ item, props }) => (
          <animated.div key={item} className="container py-2 py-md-5" style={props}>
            <h5>Tell other's how they can contact with you</h5>
            <InfoForm
              register={register}
              errors={errors}
              customEmailLabel={customEmailLabel}
            />
            <h5 className="mb-4">Pick your role</h5>
            <div className="d-flex justify-content-start align-items-center">
              <h6
                className={`mb-0 mr-2 text-${toggler ? 'secondary' : 'accent'}`}
                onClick={() => setToggler(false)}
              >Influencer</h6>
              <input
                type="checkbox"
                className="toggle"
                checked={toggler}
                onChange={() => setToggler(!toggler)}
              />
              <h6
                className={`mb-0 ml-2 text-${toggler ? 'primary' : 'secondary'}`}
                onClick={() => setToggler(true)}
              >Blogger</h6>
            </div>
            <div className="mt-3 position-relative" style={{ height: isMobile ? '175px' : '275px'}}>
              <animated.div
                className="role role--accent"
                style={{
                  opacity: opacity.interpolate((o: any) => 1 - o),
                  transform,
                  maxHeight: isMobile ? '175px' : '275px',
                  zIndex: toggler ? -10 : 10,
                }}
              >
                <div className={`card-body p-2 p-md-5 text-center`}>
                  <h3 className="mb-2 mb-md-4">Influencer</h3>
                  <p>The carbon in our apple pies with pretty stories for which there's little good evidence </p>
                  <div className="pt-0 pt-md-1">
                    <button
                      onClick={() => setRoleHandler('influencer')}
                      className={`btn btn-${isMobile ? 'md' : 'xl'} btn-block btn-accent`}
                    >
                      Discover bloggers
                    </button>
                  </div>
                </div>
              </animated.div>
              <animated.div
                className="role role--primary"
                style={{
                  opacity,
                  transform: transform.interpolate(t => `${t} rotateX(180deg)`),
                  maxHeight: isMobile ? '175px' : '275px',
                  zIndex: toggler ? 10 : -10,
                }}
              >
                <div className="card-body p-2 p-md-5 text-center" ref={register}>
                  <h3 className="mb-2 mb-md-4">Blogger</h3>
                  <p>The carbon in our apple pies with pretty stories for which there's little good evidence </p>
                  <div className="pt-0 pt-md-1 d-flex justify-content-around">
                    <button
                      className={`btn btn-${isMobile ? 'md' : 'xl'} btn-primary`}
                      onClick={() => setRoleHandler('instagram')}
                    >Instagram</button>
                    <button
                      disabled
                      className={`btn btn-${isMobile ? 'md' : 'xl'} btn-primary`}
                    >TikTok</button>
                  </div>
                </div>
              </animated.div>
            </div>
            <input
              ref={register}
              className="d-none"
              name="role"
            />
          </animated.div>
        ))
      }
    </>
  )
}

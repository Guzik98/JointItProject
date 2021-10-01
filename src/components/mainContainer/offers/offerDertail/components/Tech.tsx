import React from 'react';
import { useSettings } from '../../../../../Settings';
import './Tech.sass';


const Tech = () : JSX.Element => {
    const { dataDetail } = useSettings();

    if (!dataDetail) {
        throw new Error('Something go wrong fetching detail');
    }

    const SkillComponent = (props : any) => {
        let skillLevelName  = '';
        switch (props.level){
            case 1:
                skillLevelName = 'nice to have';
                break;
            case 2:
                skillLevelName = 'junior';
                break;
            case 3:
                skillLevelName = 'regular';
                break;
            case 4:
                skillLevelName = 'advanced';
                break;
            case 5:
                skillLevelName = 'mastered';
                break;
        }

        return (
            <div className = "stack-details">
                <div className = "skill">
                    <div className = "skill-level">
                        <div className={`${props.level >= 1 ? 'circle active-skill' : ' circle' }  `} />
                        <div className={`${props.level >= 2 ? 'circle active-skill' : ' circle' }  `} />
                        <div className={`${props.level >= 3 ? 'circle active-skill' : ' circle' }  `} />
                        <div className={`${props.level >= 4 ? 'circle active-skill' : ' circle' }  `} />
                        <div className={`${props.level >= 5 ? 'circle active-skill' : ' circle' }  `} />
                    </div>
                </div>
                <div className="skill-name">{ props.name }</div>
                <div className="skill-experience">{skillLevelName}</div>
            </div>
        );
    };

    return (
        <div className="tech-content">
            <div className="title"> Tech Stack</div>
            <div className="stack">
                <div className="stack-content">
                    { dataDetail.skills.map(( { ...props }) => {
                        return ( <SkillComponent {...props} key={props.name} /> );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Tech;
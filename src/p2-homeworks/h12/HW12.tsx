import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../h10/bll/store';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';
import { changeThemeC } from './bll/themeReducer';
import s from './HW12.module.css';

const themes = ['dark', 'red', 'some'];

function HW12() {


    
    // useDispatch, onChangeCallback

    
    const dispatch = useDispatch()
    const theme = useSelector((state: RootState) => state.theme.theme)

    return (
        <div className={s[theme]}>
            <hr/>
            <span className={theme === 'dark'? `${s.dark}` : `${s.red}`}>
                homeworks 12
            </span>

            <div className={theme === 'dark'? `${s.darkText}` : `${s.redText}`} >
                Из-под покрова тьмы ночной,<br />
                Из чёрной ямы страшных мук<br />
                Благодарю я всех богов<br />
                За мой непокорённый дух.<br />
                <br />
                И я, попав в тиски беды,<br />
                Не дрогнул и не застонал,<br />
                И под ударами судьбы<br />
                Я ранен был, но не упал.<br />
                <br />
                Тропа лежит средь зла и слёз,<br />
                Дальнейший путь не ясен, пусть,<br />
                Но всё же трудностей и бед<br />
                Я, как и прежде, не боюсь.<br />
                <br />
                Не важно, что врата узки,<br />
                Меня опасность не страшит.<br />
                Я — властелин своей судьбы,<br />
                Я — капитан своей души.<br />
            </div>

        <div>
            <SuperButton onClick={() => dispatch(changeThemeC('dark'))}>dark theme</SuperButton>
        </div>
        <div>
            <SuperButton onClick={() => dispatch(changeThemeC('light'))}>bright theme</SuperButton>
        </div>

            <hr/>
        </div>
    );
}

export default HW12;

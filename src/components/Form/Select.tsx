import { h } from 'preact';
import { useState, useRef } from 'preact/hooks';
import { useOnClickOutside } from '../../utils/Hook';
import icChevronDown from '../../assets/icons/chevron-down.png'
import icChevronDownWhite from '../../assets/icons/chevron-down-white.png'
import style from './Form.scss';

interface Props {
    placeholder: string,
    options: selectOption[],
    value?: selectOption,
    onChange: func,
}

export const Select = (props: Props) => {
    const [open, setOpen] = useState(false);
    const selectRef = useRef();

    // Close dropdown if click outside
    useOnClickOutside(selectRef, () => setOpen(false));

    const handleChange = (option: option) => {
        props.onChange(option);
        setOpen(false);
    }

    return (
        <div class={style.select} ref={selectRef}>
            <div
                class={`${style.selected} flex flex-row items-center justify-between`}
                style={
                    props.value && props.value.color
                    ?   { background: props.value.color, color: 'white', border: 'none' }
                    :   null
                }
                onClick={() => setOpen(!open)}
            >
                <span>{props.value?.label || props.placeholder}</span>
                <img src={props.value ? icChevronDownWhite : icChevronDown} alt="" />
            </div>

            {open &&
                <ul class={style.option}>
                    {props.options.length > 0
                        ?   props.options.map((option, index) => (
                                <li onClick={() => handleChange(option)}>{option.label}</li>
                            ))
                        :   <li><i>No Option</i></li>
                    }
                </ul>
            }
        </div>
    );
}

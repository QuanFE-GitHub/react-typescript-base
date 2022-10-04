import { Input } from 'antd';
import classNames from 'classnames/bind';

import styled from './textArea.module.scss';

const cx = classNames.bind(styled);

const { TextArea } = Input;

type TextAreaComponentProps = {
  autoComplete?: string | undefined;
  autoFocus?: boolean | undefined;
  cols?: number | undefined;
  disabled?: boolean | undefined;
  form?: string | undefined;
  maxLength?: number | undefined;
  minLength?: number | undefined;
  name?: string | undefined;
  placeholder?: string | undefined;
  readOnly?: boolean | undefined;
  required?: boolean | undefined;
  rows?: number | undefined;
  value?: string | ReadonlyArray<string> | number | undefined;
  wrap?: string | undefined;
  showCount?: boolean | undefined;
  bordered?: boolean | undefined;
  allowClear?: boolean | undefined;
  defaultValue?: string | undefined;
  autoSize?: boolean | object | undefined;

  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void | undefined;
  onResize?: () => void | undefined;
  onPressEnter?: () => void | undefined;
};

const TextAreaComponent = (props: TextAreaComponentProps) => {
  const {
    name,
    rows,
    cols,
    placeholder,
    defaultValue,
    readOnly,
    required,
    autoComplete,
    autoFocus,
    disabled,
    form,
    maxLength,
    minLength,
    value,
    wrap,
    showCount,
    bordered,
    allowClear,
    autoSize,

    onChange,
    onResize,
    onPressEnter,
  } = props;
  return (
    <div className={cx('textArea')}>
      <TextArea
        name={name}
        rows={rows}
        cols={cols}
        defaultValue={defaultValue}
        showCount={showCount}
        allowClear={allowClear}
        bordered={bordered}
        placeholder={placeholder}
        readOnly={readOnly}
        required={required}
        autoComplete={autoComplete}
        autoFocus={autoFocus}
        disabled={disabled}
        form={form}
        maxLength={maxLength}
        minLength={minLength}
        value={value}
        wrap={wrap}
        autoSize={autoSize}
        onChange={onChange}
        onResize={onResize}
        onPressEnter={onPressEnter}
      />
    </div>
  );
};

const TextAreaProps = {
  name: 'textArea',
  rows: 4,
  cols: 4,
  placeholder: 'TextArea',
  defaultValue: '',
  readOnly: false,
  required: false,
  autoComplete: 'on',
  autoFocus: false,
  disabled: false,
  form: '',
  maxLength: 200,
  minLength: 0,
  // value,
  wrap: '',
  showCount: true,
  bordered: true,
  allowClear: false,
  autoSize: false,

  onChange: null,
  onResize: null,
  onPressEnter: null,
};

TextAreaComponent.defaultProps = TextAreaProps;

export default TextAreaComponent;

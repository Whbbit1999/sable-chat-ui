---
nav: 组件
---

# Icon

## 默认

```jsx
import { Icon } from 'sable-chat-ui';
import { ReactComponent as SmileIcon } from '/public/icons/smile.svg';

export default () => <Icon icon={SmileIcon} />;
```

## 自定义大小

```jsx
import { Icon } from 'sable-chat-ui';
import { ReactComponent as SmileIcon } from '/public/icons/smile.svg';

export default () => <Icon icon={SmileIcon} width={48} height={48} />;
```

## 自定义透明度/颜色

```jsx
import { Icon } from 'sable-chat-ui';
import { ReactComponent as SmileIcon } from '/public/icons/smile.svg';

export default () => (
  <div style={{ display: 'flex', gap: '10px' }}>
    <Icon icon={SmileIcon} color="red" />
    <Icon icon={SmileIcon} opacity={0.5} />
  </div>
);
```

## 使用 FontAwesome 提供的图标

```jsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots } from '@fortawesome/free-solid-svg-icons';
export default () => (
  <div style={{ display: 'flex', gap: '10px' }}>
    <FontAwesomeIcon icon={faCommentDots} />
    <FontAwesomeIcon icon={faCommentDots} style={{ color: '#ccc' }} />
    <FontAwesomeIcon icon={faCommentDots} style={{ fontSize: '2rem' }} />
  </div>
);
```

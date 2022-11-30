---
nav: 组件
---

# Avatar 头像

This is an example component.

## 默认

```jsx
import { Avatar } from 'sable-chat-ui';
import avatar1 from '/public/images/face-male-1.jpg';

export default () => <Avatar src={avatar1} />;
```

## 尺寸

```jsx
import { Avatar } from 'sable-chat-ui';
import avatar1 from '/public/images/face-male-1.jpg';

export default () => (
  <div style={{ display: 'flex', gap: '8px' }}>
    <Avatar src={avatar1} size="24px" />
    <Avatar src={avatar1} size="48px" />
    <Avatar src={avatar1} size="82px" />
  </div>
);
```

## 登录状态

```jsx
import { Avatar } from 'sable-chat-ui';
import avatar1 from '/public/images/face-male-1.jpg';
export default () => (
  <div style={{ display: 'flex', gap: '8px' }}>
    <Avatar src={avatar1} status="online" />
    <Avatar src={avatar1} status="offline" />
  </div>
);
```

## 登录状态 Icon 尺寸

```jsx
import { Avatar } from 'sable-chat-ui';
import avatar1 from '/public/images/face-male-1.jpg';

export default () => (
  <div style={{ display: 'flex', gap: '8px' }}>
    <Avatar src={avatar1} status="offline" statusIconSize="8px" />
    <Avatar src={avatar1} status="offline" statusIconSize="10px" />
    <Avatar src={avatar1} status="online" statusIconSize="12px" />
  </div>
);
```

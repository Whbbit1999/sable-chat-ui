---
nav: 组件
---

# NavBar

## MenuItem 菜单项

```jsx
import { MenuItem } from 'sable-chat-ui';
import { faCommentDots } from '@fortawesome/free-solid-svg-icons';
export default () => (
  <div
    style={{
      background: '#292f4c',
      width: '100px',
    }}
  >
    <MenuItem showBadge active icon={faCommentDots} />
  </div>
);
```

## 侧边栏导航组件

```jsx
import { NavBar } from 'sable-chat-ui';
import face1 from '/public/images/face-male-1.jpg';

export default () => {
  return (
    <div>
      <NavBar profileImage={face1} />
    </div>
  );
};
```

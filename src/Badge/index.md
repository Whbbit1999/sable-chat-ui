---
nav: 组件
---

# Badge

## 默认

```jsx
import { Badge } from 'sable-chat-ui';

export default () => (
  <div>
    <Badge count={1}></Badge>
  </div>
);
```

## 红点

```jsx
import { Badge } from 'sable-chat-ui';
export default () => (
  <div>
    <Badge show variant="dot">
      显示红点
    </Badge>

    <Badge show={false} variant="dot">
      不显示红点
    </Badge>
  </div>
);
```

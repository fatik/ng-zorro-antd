# ServiceAnt Quick Reference Card

**3-minute integration guide + common patterns**

---

## ⚡ 3-Step Integration

### 1. Copy Files
```bash
cp -r serviceant-package /your-angular-app/
```

### 2. Update `angular.json`
```json
{
  "styles": ["src/styles.less"],
  "stylePreprocessorOptions": {
    "includePaths": ["node_modules", "src"]
  }
}
```

### 3. Create `src/styles.less`
```less
@import 'styles/themes/serviceant.less';
@import 'ng-zorro-antd/ng-zorro-antd.less';
```

**Done!** Run `npm start`

---

## 🎨 Design Tokens Reference

### Colors
```less
@primary-color: #74ba54;           // ServicePath green
@text-color: #2b3036;              // Primary text (dark gray)
@text-color-secondary: #767d84;    // Secondary text (light gray)
@border-color-base: #e5e8ec;       // Light borders
@component-background: #ffffff;    // Cards, inputs
@body-background: #FAFBFC;         // Page background
```

### Typography
```less
@font-family: 'Open Sans', sans-serif;
@font-size-base: 12px;             // Compact UI
@font-size-lg: 14px;               // Headers
```

### Spacing
```less
@padding-xss: 4px;                 // Tiny
@padding-xs: 8px;                  // Small
@padding-sm: 12px;                 // Medium
@padding-md: 16px;                 // Content
@padding-lg: 24px;                 // Cards
```

### Borders
```less
@border-radius-base: 4px;          // Default
@border-radius-lg: 8px;            // Cards
```

---

## 🧩 Common Components

### Button
```html
<button nz-button nzType="primary">Click Me</button>
```

### Input
```html
<input nz-input placeholder="Enter text" />
```

### Card
```html
<nz-card nzTitle="Title">
  Content here
</nz-card>
```

### Select
```html
<nz-select nzPlaceHolder="Choose">
  <nz-option nzValue="1" nzLabel="Option 1"></nz-option>
</nz-select>
```

### Table
```html
<nz-table [nzData]="data">
  <thead>
    <tr><th>Name</th></tr>
  </thead>
  <tbody>
    @for (item of data; track item.id) {
      <tr><td>{{ item.name }}</td></tr>
    }
  </tbody>
</nz-table>
```

---

## 🎯 ServiceAnt Wrappers

### Text Input
```typescript
import { SaTextInputComponent } from './serviceant-package/components';

<sa-text-input
  label="Email"
  [value]="email"
  (valueChange)="email = $event"
  placeholder="you@example.com"
  helperText="Helper text here"
  [required]="true"
/>
```

### Info Card
```typescript
import { SaInfoCardComponent } from './serviceant-package/components';

<sa-info-card title="Details">
  <p>Content here</p>
</sa-info-card>
```

### Status Pill
```typescript
import { SaPillComponent } from './serviceant-package/components';

<sa-pill variant="success">Approved</sa-pill>
<sa-pill variant="warning">Pending</sa-pill>
<sa-pill variant="error">Rejected</sa-pill>
```

---

## 🔧 Customization Snippets

### Change Primary Color
```less
// In your custom theme file
@import 'serviceant.less';
@primary-color: #1890ff;  // Override to blue
@import 'ng-zorro-antd/ng-zorro-antd.less';
```

### Larger Font Size
```less
@import 'serviceant.less';
@font-size-base: 14px;  // Override from 12px
@import 'ng-zorro-antd/ng-zorro-antd.less';
```

### Custom Component Styles
```less
// After imports
.ant-card {
  border-radius: 12px !important;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}
```

---

## 🐛 Troubleshooting

### Styles not applying?
```bash
# Check import order (theme BEFORE ng-zorro)
# Clear cache
rm -rf .angular
npm start
```

### Font not loading?
```html
<!-- Add to index.html -->
<link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap" rel="stylesheet">
```

### Build errors?
```bash
npm install less --save-dev
```

---

## 📚 Full Docs

- [Quick Start](README.md)
- [Integration Guide](INTEGRATION_GUIDE.md)
- [Demo Component](demo/demo.component.ts)

---

## 💡 Tips

1. **Import order matters**: Theme → NG-ZORRO
2. **Use wrapper components** for consistent patterns
3. **Extend, don't override**: Create custom theme extending ServiceAnt
4. **Test with demo component** before deploying

---

**ServiceAnt = ServicePath + Ant Design** 🐜🎨

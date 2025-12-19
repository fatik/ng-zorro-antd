# ServiceAnt Theme Package

**Drop-in theme package for NG-ZORRO Ant Design based on ServicePath/Noodled design system.**

---

## 🚀 Quick Start (3 Steps)

### **Step 1: Copy Files**

Copy the `serviceant-package` folder to your Angular project:

```bash
# Option A: Copy to your project root
cp -r serviceant-package /path/to/your-angular-app/

# Option B: Copy just the theme file to src/styles
mkdir -p /path/to/your-angular-app/src/styles/themes
cp serviceant-package/styles/serviceant.less /path/to/your-angular-app/src/styles/themes/
```

---

### **Step 2: Configure Angular**

Update `angular.json`:

```json
{
  "projects": {
    "your-app": {
      "architect": {
        "build": {
          "options": {
            "styles": [
              "src/styles.less"
            ],
            "stylePreprocessorOptions": {
              "includePaths": [
                "node_modules",
                "src"
              ]
            }
          }
        }
      }
    }
  }
}
```

---

### **Step 3: Import Theme**

In your `src/styles.less`:

```less
// Import ServiceAnt theme
@import 'styles/themes/serviceant.less';

// Import NG-ZORRO (must come AFTER theme)
@import 'ng-zorro-antd/ng-zorro-antd.less';

// Optional: Import Google Fonts
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap');
```

**That's it!** Run `npm start` and your app will use ServiceAnt theme.

---

## 📦 What's Included

```
serviceant-package/
├── README.md                       # This file
├── INTEGRATION_GUIDE.md            # Detailed integration docs
├── styles/
│   └── serviceant.less            # Theme file (all design tokens)
├── components/                     # Example Angular wrapper components
│   ├── text-input/
│   ├── info-card/
│   └── pill/
├── integration/
│   ├── angular.json.snippet       # Copy-paste config
│   └── styles.less.example        # Example styles file
└── demo/
    └── demo.component.ts          # Demo component showing all components
```

---

## 🎨 Design Tokens

ServiceAnt provides a complete design system:

| Token | Value | Description |
|-------|-------|-------------|
| **Colors** |
| Primary | `#74ba54` | ServicePath green |
| Text Primary | `#2b3036` | Dark gray for main text |
| Text Secondary | `#767d84` | Lighter gray for labels |
| Border Light | `#e5e8ec` | Card/input borders |
| Background | `#FAFBFC` | Page background |
| **Typography** |
| Font Family | `Open Sans` | Primary font |
| Base Size | `12px` | Compact UI |
| Large Size | `14px` | Headers |
| **Spacing** |
| Grid | `4px` | Base spacing unit |
| Large | `24px` | Card padding |
| Medium | `16px` | Content spacing |
| Small | `12px` | Tight spacing |
| **Borders** |
| Radius | `4px` | Default roundness |
| Radius Large | `8px` | Cards, modals |

---

## 💡 Usage Examples

### **Basic Button**
```html
<button nz-button nzType="primary">ServiceAnt Button</button>
```
Renders with `#74ba54` green background.

### **Card with Form**
```html
<nz-card nzTitle="User Information">
  <input nz-input placeholder="Enter name" />
  <button nz-button nzType="primary">Submit</button>
</nz-card>
```
Renders with ServiceAnt spacing, borders, and colors.

### **Using Wrapper Components**
```typescript
import { SaTextInputComponent } from './serviceant-package/components/text-input';

@Component({
  imports: [SaTextInputComponent],
  template: `
    <sa-text-input
      label="Email"
      [value]="email"
      (valueChange)="email = $event"
      helperText="We'll never share your email"
    />
  `
})
```

---

## 🔧 Customization

### **Override Specific Variables**

Create a custom theme file extending ServiceAnt:

```less
// my-custom-theme.less
@import 'serviceant.less';

// Override specific tokens
@primary-color: #1890ff;  // Change to blue
@font-size-base: 14px;    // Larger text

@import 'ng-zorro-antd/ng-zorro-antd.less';
```

### **Component-Specific Overrides**

```less
// After importing NG-ZORRO
.ant-btn {
  border-radius: 16px !important; // Rounded buttons
}
```

---

## 📖 Full Documentation

See [INTEGRATION_GUIDE.md](../SERVICEANT_INTEGRATION.md) for:
- Step-by-step setup guide
- Dynamic theming
- Building custom components
- TypeScript examples
- Troubleshooting

---

## ✅ Checklist

After copying files, verify:

- [ ] `serviceant.less` is in your project
- [ ] `angular.json` has `stylePreprocessorOptions` configured
- [ ] `styles.less` imports ServiceAnt **before** NG-ZORRO
- [ ] LESS is installed: `npm install less --save-dev`
- [ ] Open Sans font is loaded (Google Fonts or local)
- [ ] Run `npm start` to see changes

---

## 🐛 Troubleshooting

**Styles not applying?**
- Check import order: ServiceAnt → NG-ZORRO
- Verify `includePaths` in `angular.json`

**Font looks wrong?**
- Add to `index.html`:
  ```html
  <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap" rel="stylesheet">
  ```

**Build errors?**
- Install LESS: `npm install less --save-dev`
- Ensure file paths are correct

---

## 📄 License

MIT - Use freely in your projects!

---

**Questions?** See the [full integration guide](../SERVICEANT_INTEGRATION.md) or check NG-ZORRO docs.

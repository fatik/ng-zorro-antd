# How to View the Configurator Wizard POC

**Quick guide to see your converted component in action**

---

## 🎯 What You're About to See

A **pixel-perfect** conversion of ConfiguratorWizardModal2.tsx from sp-protos to Angular using ServiceAnt theme.

---

## 🚀 Quick Start (3 Steps)

### **Step 1: Ensure ServiceAnt Theme is Configured**

Check that you have the ServiceAnt theme set up:

```less
// src/styles.less should contain:
@import 'styles/themes/serviceant.less';
@import 'ng-zorro-antd/ng-zorro-antd.less';
```

If not set up, see [SERVICEANT_INTEGRATION.md](SERVICEANT_INTEGRATION.md).

---

### **Step 2: Create a Test Route**

Add the demo component to your Angular app:

```typescript
// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { ConfiguratorDemoComponent } from './serviceant-package/demo/configurator-demo.component';

export const routes: Routes = [
  {
    path: 'configurator-poc',
    component: ConfiguratorDemoComponent
  },
  // ... your other routes
];
```

---

### **Step 3: Navigate to the Demo**

```bash
# Start your dev server
npm start

# Open browser to:
http://localhost:4200/configurator-poc
```

**Click "Open Configurator Wizard"** to see the modal!

---

## 📋 Alternative: Standalone Test App

If you want to test in isolation:

### **Create New Angular App**

```bash
cd ~/Documents/GitHub
ng new configurator-test --routing --style=less
cd configurator-test
npm install ng-zorro-antd
```

### **Copy ServiceAnt Files**

```bash
# Copy theme
mkdir -p src/styles/themes
cp ../ng-zorro-antd/components/style/themes/serviceant.less src/styles/themes/

# Copy component package
cp -r ../ng-zorro-antd/serviceant-package .
```

### **Configure**

1. **Update angular.json:**
```json
{
  "styles": ["src/styles.less"],
  "stylePreprocessorOptions": {
    "includePaths": ["node_modules", "src"]
  }
}
```

2. **Create src/styles.less:**
```less
@import 'styles/themes/serviceant.less';
@import 'ng-zorro-antd/ng-zorro-antd.less';
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap');

body {
  font-family: 'Open Sans', sans-serif;
  margin: 0;
  background-color: #FAFBFC;
}
```

3. **Update app.component.ts:**
```typescript
import { Component } from '@angular/core';
import { ConfiguratorDemoComponent } from './serviceant-package/demo/configurator-demo.component';

@Component({
  selector: 'app-root',
  imports: [ConfiguratorDemoComponent],
  template: '<sa-configurator-demo />'
})
export class AppComponent {}
```

4. **Run:**
```bash
npm start
```

---

## 🎨 What to Look For

### **Visual Checks**

When the modal opens, verify:

1. **ServicePath Green (#74ba54)**
   - Primary button (Next button)
   - Focus rings on inputs
   - Breadcrumb active state

2. **Open Sans Font**
   - All text should use Open Sans
   - 12px base size (compact)
   - 14px headers

3. **Layout**
   - Full-screen modal (95% viewport)
   - Two columns (content + summary)
   - Sticky left column in tables
   - Sticky right summary panel

4. **Spacing**
   - 24px gaps between sections
   - 16px card padding
   - 8px button gaps

5. **Colors**
   - Text: #2b3036 (primary), #767d84 (secondary)
   - Borders: #e5e8ec
   - Backgrounds: #ffffff (cards), #f8f9fa (headers)

### **Functional Checks**

1. **Edit Mode Toggle**
   - Click edit icon on Chat Channel
   - Inputs should appear in table cells
   - Can edit values

2. **Calculations**
   - Change Contact Volume values
   - Agent Hours should recalculate
   - Agent Count should update

3. **Form Inputs**
   - Try text inputs
   - Toggle checkboxes
   - Change dropdowns
   - Adjust quantity spinners

4. **Navigation**
   - Click Cancel → modal closes
   - Click backdrop → modal closes
   - Click X button → modal closes

---

## 🔍 Troubleshooting

### **Modal Doesn't Open**

Check browser console for errors. Common issues:

```typescript
// Ensure import is correct
import { ConfiguratorWizardModalComponent } from './serviceant-package/components';

// Ensure it's in imports array
@Component({
  imports: [ConfiguratorWizardModalComponent], // ← Must be here
  // ...
})
```

### **Styles Look Wrong**

Check that ServiceAnt theme is loaded:

```bash
# Look for these in browser DevTools:
# Application → Styles → Should see:
# - Open Sans font
# - #74ba54 green color
# - 12px font sizes
```

If not loaded:
1. Verify `styles.less` imports serviceant.less
2. Check `angular.json` has stylePreprocessorOptions
3. Restart dev server

### **NG-ZORRO Components Missing**

```bash
# Install NG-ZORRO
npm install ng-zorro-antd

# Ensure Angular version is 18+
ng version
```

### **Icons Not Showing**

Icons use NG-ZORRO's icon module. Check:

```typescript
// Should be imported
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  imports: [NzIconModule],
  // ...
})
```

---

## 📸 Expected Result

You should see:

```
┌─────────────────────────────────────────────────────────────┐
│ Configurator Demo Page                                       │
├─────────────────────────────────────────────────────────────┤
│                                                               │
│  📋 Info Cards (Component Details, Features, Tokens)         │
│                                                               │
│  [Open Configurator Wizard] ← Click this button             │
│                                                               │
└─────────────────────────────────────────────────────────────┘

When modal opens:

┌─────────────────────────────────────────────────────────────┐
│ Configurator Wizard | A Section > Some Group > Pricing    [X]│
├─────────────────────────────────────────────────────────────┤
│ Service Desk (Flex) - with New Erlang Calculator             │
│                           [Cancel] [Previous] [Next ▶]       │
├───────────────────────────┬─────────────────────────────────┤
│                           │                                   │
│ ┌─────────────────────┐  │  ┌──────────────────────┐        │
│ │ Chat Requirements   │  │  │ PRODUCT SUMMARY      │        │
│ │ (Editable Tables)   │  │  │                      │        │
│ └─────────────────────┘  │  │ TOTAL PRICE          │        │
│                           │  │ Monthly              │        │
│ ┌─────────────────────┐  │  │                      │        │
│ │ Portal Requirements │  │  │   $96,600.00        │        │
│ │ (Editable Tables)   │  │  │                      │        │
│ └─────────────────────┘  │  │ SLA Chat: ...        │        │
│                           │  │ Hours of Support: ..│        │
│ ┌─────────────────────┐  │  │                      │        │
│ │ Form Sections       │  │  │ [Rule Traces]       │        │
│ │ (Text, Labels, etc) │  │  │                      │        │
│ └─────────────────────┘  │  │ SALES GUIDANCE       │        │
│                           │  │ Market Pricing: ...  │        │
│                           │  │                      │        │
└───────────────────────────┴─────────────────────────────────┘
```

---

## ✅ Success Criteria

Your POC is working correctly if:

- [ ] Modal opens full-screen
- [ ] ServicePath green (#74ba54) is visible on buttons/focus
- [ ] Open Sans font is used throughout
- [ ] Text is 12px (looks compact)
- [ ] Edit mode toggle works in tables
- [ ] Calculations update when values change
- [ ] Summary panel stays sticky on scroll
- [ ] Left table column stays sticky on scroll
- [ ] All form inputs are functional
- [ ] Modal closes on Cancel/X/backdrop click

---

## 📞 Need Help?

### **If something doesn't work:**

1. **Check console** for errors
2. **Verify ServiceAnt theme** is configured
3. **Review file paths** in imports
4. **Restart dev server** after config changes

### **Documentation:**
- [CONFIGURATOR_POC_SUMMARY.md](CONFIGURATOR_POC_SUMMARY.md) - Overview
- [PROOF_OF_CONCEPT.md](serviceant-package/PROOF_OF_CONCEPT.md) - Details
- [SERVICEANT_INTEGRATION.md](SERVICEANT_INTEGRATION.md) - Setup guide

---

## 🎉 Ready to Go!

You now have everything you need to see the POC in action.

**Next steps after viewing:**
1. Review visual fidelity vs sp-protos original
2. Test all interactive features
3. Validate ServicePath branding
4. Get team feedback
5. Approve for production use

---

**Happy testing!** 🚀

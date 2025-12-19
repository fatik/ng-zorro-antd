# ServiceAnt Theme - Integration Guide

**ServiceAnt** is a custom NG-ZORRO Ant Design theme based on the ServicePath/Noodled design system. This guide shows you how to integrate it into any Angular project.

---

## 🎨 Design Token Overview

ServiceAnt provides a complete design system with:

- **Primary Brand Color:** `#74ba54` (ServicePath Green)
- **Typography:** Open Sans font family, 12px base (compact)
- **Spacing:** 4px grid system (vs NG-ZORRO default 8px)
- **Border Radius:** 4px base, 8px large
- **Compact Components:** Smaller, denser UI optimized for data-heavy applications

---

## 📦 Installation Methods

### **Method 1: Drop-in File (Recommended for Quick Start)**

1. **Copy the theme file** to your Angular project:
   ```bash
   mkdir -p src/styles/themes
   cp components/style/themes/serviceant.less src/styles/themes/
   ```

2. **Import in your main styles file** (`src/styles.less`):
   ```less
   // Import NG-ZORRO with ServiceAnt theme
   @import 'styles/themes/serviceant.less';
   @import 'ng-zorro-antd/ng-zorro-antd.less';
   ```

3. **Update `angular.json`** to use LESS:
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

4. **Rebuild your app:**
   ```bash
   npm start
   ```

---

### **Method 2: NPM Package (For Reusable Library)**

If you want to publish ServiceAnt as a reusable package:

1. **Create a new Angular library:**
   ```bash
   ng generate library serviceant-theme
   ```

2. **Copy theme file** to library:
   ```bash
   cp components/style/themes/serviceant.less projects/serviceant-theme/styles/
   ```

3. **Publish to NPM:**
   ```bash
   cd projects/serviceant-theme
   npm publish
   ```

4. **Install in projects:**
   ```bash
   npm install @your-org/serviceant-theme
   ```

5. **Import in styles:**
   ```less
   @import '~@your-org/serviceant-theme/styles/serviceant.less';
   @import 'ng-zorro-antd/ng-zorro-antd.less';
   ```

---

### **Method 3: Variable Override (For Custom Builds)**

You can also override specific variables without importing the full theme:

1. **Create your custom theme file** (`src/styles/custom-theme.less`):
   ```less
   // Override specific variables
   @primary-color: #74ba54;
   @font-size-base: 12px;
   @border-radius-base: 4px;
   @padding-lg: 24px;
   @padding-md: 16px;

   // Import NG-ZORRO
   @import 'ng-zorro-antd/ng-zorro-antd.less';
   ```

---

## 🚀 Complete Integration Example

### **Step-by-Step Setup**

#### **1. Install Dependencies**
```bash
npm install ng-zorro-antd less --save
```

#### **2. Project Structure**
```
your-angular-app/
├── src/
│   ├── styles/
│   │   ├── themes/
│   │   │   └── serviceant.less    # ServiceAnt theme
│   │   └── custom.less             # Your app-specific styles
│   ├── styles.less                 # Main entry point
│   └── app/
│       └── app.config.ts
├── angular.json
└── package.json
```

#### **3. Configure angular.json**
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

#### **4. Create styles.less**
```less
// src/styles.less
@import 'styles/themes/serviceant.less';
@import 'ng-zorro-antd/ng-zorro-antd.less';

// Optional: Your custom styles
@import 'styles/custom.less';

// Optional: Google Fonts (if not already loaded)
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap');
```

#### **5. Configure Angular App** (`src/app/app.config.ts`)

**For Standalone Apps (Angular 14+):**
```typescript
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';
import { provideNzI18n, en_US } from 'ng-zorro-antd/i18n';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    provideHttpClient(),
    provideNzI18n(en_US),
  ]
};
```

**For Module-based Apps:**
```typescript
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // Import NG-ZORRO modules as needed
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

#### **6. Use in Components**

Import individual NG-ZORRO components:

```typescript
import { Component } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzCardModule } from 'ng-zorro-antd/card';

@Component({
  selector: 'app-demo',
  imports: [NzButtonModule, NzInputModule, NzCardModule],
  template: `
    <nz-card nzTitle="ServiceAnt Demo">
      <input nz-input placeholder="Enter text" />
      <button nz-button nzType="primary">Submit</button>
    </nz-card>
  `
})
export class DemoComponent {}
```

---

## 🎨 Dynamic Theming (Optional)

If you need **runtime theme switching**, use CSS variables:

#### **1. Import Variable Version**
```less
// Instead of serviceant.less, use:
@import 'styles/themes/serviceant.less';
@import 'ng-zorro-antd/ng-zorro-antd.variable.min.css';
```

#### **2. Configure Theme Service**
```typescript
import { Component, inject } from '@angular/core';
import { NzConfigService } from 'ng-zorro-antd/core/config';

@Component({
  selector: 'app-root',
  template: `
    <button (click)="changeTheme('#1890ff')">Blue Theme</button>
    <button (click)="changeTheme('#74ba54')">ServicePath Green</button>
  `
})
export class AppComponent {
  private nzConfigService = inject(NzConfigService);

  changeTheme(color: string): void {
    this.nzConfigService.set('theme', { primaryColor: color });
  }
}
```

---

## 📋 Customization Reference

### **Color Variables**
```less
@primary-color: #74ba54;           // Brand green
@text-color: #2b3036;              // Primary text
@text-color-secondary: #767d84;    // Secondary text
@border-color-base: #e5e8ec;       // Borders
@component-background: #ffffff;    // Cards, inputs
@body-background: #FAFBFC;         // Page background
```

### **Typography Variables**
```less
@font-family: 'Open Sans', sans-serif;
@font-size-base: 12px;             // Base font (compact)
@font-size-lg: 14px;               // Large text
@font-size-sm: 12px;               // Small text
```

### **Spacing Variables**
```less
@padding-lg: 24px;                 // Large spacing
@padding-md: 16px;                 // Medium spacing
@padding-sm: 12px;                 // Small spacing
@padding-xs: 8px;                  // Extra small
@padding-xss: 4px;                 // Tiny spacing
```

### **Border Radius**
```less
@border-radius-base: 4px;          // Default radius
@border-radius-lg: 8px;            // Large radius
```

### **Component Heights**
```less
@height-base: 32px;                // Default input/button
@height-lg: 40px;                  // Large
@height-sm: 24px;                  // Small
```

---

## 🧩 Building Custom Components

### **Example: ServiceAnt TextInput Wrapper**

```typescript
import { Component, input, output } from '@angular/core';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFormModule } from 'ng-zorro-antd/form';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'sa-text-input',
  imports: [NzInputModule, NzFormModule, FormsModule],
  template: `
    <nz-form-item>
      <nz-form-label [nzRequired]="required()">
        {{ label() }}
      </nz-form-label>
      <nz-form-control [nzErrorTip]="errorText()">
        <input
          nz-input
          [placeholder]="placeholder()"
          [disabled]="disabled()"
          [ngModel]="value()"
          (ngModelChange)="valueChange.emit($event)"
        />
        @if (helperText() && !errorText()) {
          <div class="helper-text">{{ helperText() }}</div>
        }
      </nz-form-control>
    </nz-form-item>
  `,
  styles: [`
    .helper-text {
      font-family: 'Open Sans', sans-serif;
      font-size: 12px;
      color: #767d84;
      margin-top: 4px;
    }
  `]
})
export class SaTextInputComponent {
  label = input.required<string>();
  value = input<string>('');
  placeholder = input<string>('');
  required = input<boolean>(false);
  disabled = input<boolean>(false);
  helperText = input<string>('');
  errorText = input<string>('');

  valueChange = output<string>();
}
```

**Usage:**
```typescript
<sa-text-input
  label="Email"
  [value]="email"
  (valueChange)="email = $event"
  placeholder="Enter your email"
  helperText="We'll never share your email"
  [required]="true"
/>
```

---

## 🎯 Component Patterns

### **InfoCard Pattern**
```typescript
@Component({
  selector: 'sa-info-card',
  imports: [NzCardModule],
  template: `
    <nz-card [nzTitle]="title()">
      <ng-content />
    </nz-card>
  `,
  styles: [`
    :host ::ng-deep .ant-card {
      border-radius: 4px;
    }
    :host ::ng-deep .ant-card-head {
      font-family: 'Open Sans', sans-serif;
      font-size: 14px;
      font-weight: 600;
      padding: 16px 24px;
    }
    :host ::ng-deep .ant-card-body {
      padding: 16px 24px;
    }
  `]
})
export class SaInfoCardComponent {
  title = input.required<string>();
}
```

### **Status Pill Pattern**
```typescript
@Component({
  selector: 'sa-pill',
  imports: [NzTagModule],
  template: `
    <nz-tag [nzColor]="color()">
      <ng-content />
    </nz-tag>
  `,
  styles: [`
    :host ::ng-deep .ant-tag {
      border-radius: 16px;
      font-family: 'Open Sans', sans-serif;
      font-size: 12px;
      padding: 4px 12px;
    }
  `]
})
export class SaPillComponent {
  color = input<string>('default');
}
```

---

## 📦 Distributable Package Structure

If you want to create a distributable package for developers:

```
serviceant-theme/
├── README.md                       # This guide
├── package.json                    # NPM package config
├── styles/
│   ├── serviceant.less            # Main theme
│   └── serviceant.css             # Pre-compiled (optional)
├── components/                     # Angular wrapper components
│   ├── text-input/
│   │   ├── text-input.component.ts
│   │   └── index.ts
│   ├── info-card/
│   │   ├── info-card.component.ts
│   │   └── index.ts
│   └── public-api.ts
├── integration/
│   ├── angular.json.snippet       # Config snippet
│   └── styles.less.example        # Example styles file
└── demo/                           # Demo app (optional)
```

### **package.json Example**
```json
{
  "name": "@serviceant/ng-theme",
  "version": "1.0.0",
  "description": "ServiceAnt theme for NG-ZORRO Ant Design",
  "main": "public-api.ts",
  "peerDependencies": {
    "@angular/common": "^18.0.0 || ^19.0.0",
    "@angular/core": "^18.0.0 || ^19.0.0",
    "ng-zorro-antd": "^18.0.0 || ^19.0.0"
  },
  "keywords": ["angular", "ng-zorro", "theme", "serviceant"],
  "license": "MIT"
}
```

---

## 🔧 Troubleshooting

### **Issue: Styles not applying**
- Ensure `angular.json` has `stylePreprocessorOptions` configured
- Check that `styles.less` imports the theme **before** NG-ZORRO
- Verify LESS is installed: `npm install less --save-dev`

### **Issue: Font not loading**
- Add Google Fonts import to `index.html`:
  ```html
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap" rel="stylesheet">
  ```

### **Issue: Build errors with LESS**
- Install LESS loader: `npm install less --save-dev`
- Ensure `angular.json` uses `.less` extension for styles

### **Issue: Theme variables not overriding**
- Import order matters! Theme must come **before** NG-ZORRO:
  ```less
  @import 'serviceant.less';  // FIRST
  @import 'ng-zorro-antd/ng-zorro-antd.less';  // SECOND
  ```

---

## 📚 Additional Resources

- [NG-ZORRO Documentation](https://ng.ant.design/docs/introduce/en)
- [NG-ZORRO Customization Guide](https://ng.ant.design/docs/customize-theme/en)
- [ServicePath Design System](/Users/fatik/Documents/GitHub/sp-protos/src/pages/DesignSystemPage.tsx)

---

## 📄 License

MIT License - Feel free to use in your projects!

---

## 🤝 Contributing

To customize or extend ServiceAnt:

1. **Fork the theme file** and modify variables
2. **Create wrapper components** following the patterns above
3. **Share back** - Submit improvements to the team!

---

**Happy coding with ServiceAnt!** 🐜🎨

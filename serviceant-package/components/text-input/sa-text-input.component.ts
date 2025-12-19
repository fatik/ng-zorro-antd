import { Component, input, output } from '@angular/core';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFormModule } from 'ng-zorro-antd/form';
import { FormsModule } from '@angular/forms';

/**
 * ServiceAnt Text Input Component
 *
 * A wrapper around NG-ZORRO's input with ServicePath design patterns:
 * - 12px font size (compact)
 * - Open Sans font family
 * - Helper text and error states
 * - ServicePath green focus ring
 *
 * @example
 * <sa-text-input
 *   label="Email Address"
 *   [value]="email"
 *   (valueChange)="email = $event"
 *   placeholder="you@example.com"
 *   helperText="We'll never share your email"
 *   [required]="true"
 * />
 */
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
          [type]="type()"
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
    :host {
      display: block;
    }

    .helper-text {
      font-family: 'Open Sans', sans-serif;
      font-size: 12px;
      color: #767d84;
      margin-top: 4px;
    }

    :host ::ng-deep .ant-form-item-label > label {
      font-family: 'Open Sans', sans-serif;
      font-size: 12px;
      color: #2b3036;
      font-weight: 400;
    }

    :host ::ng-deep .ant-input {
      font-family: 'Open Sans', sans-serif;
      font-size: 12px;
      padding: 6px 8px;
      border-color: #cdd1d5;
    }

    :host ::ng-deep .ant-input:focus {
      border-color: #74ba54;
      box-shadow: 0 0 0 2px rgba(116, 186, 84, 0.2);
    }

    :host ::ng-deep .ant-form-item-explain-error {
      font-family: 'Open Sans', sans-serif;
      font-size: 12px;
    }
  `]
})
export class SaTextInputComponent {
  /** Input label text */
  label = input.required<string>();

  /** Current value */
  value = input<string>('');

  /** Input type (text, email, password, etc.) */
  type = input<'text' | 'email' | 'password' | 'number' | 'tel'>('text');

  /** Placeholder text */
  placeholder = input<string>('');

  /** Whether field is required */
  required = input<boolean>(false);

  /** Whether field is disabled */
  disabled = input<boolean>(false);

  /** Helper text shown below input */
  helperText = input<string>('');

  /** Error text (overrides helper text) */
  errorText = input<string>('');

  /** Emitted when value changes */
  valueChange = output<string>();
}

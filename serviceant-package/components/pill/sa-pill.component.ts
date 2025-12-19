import { Component, input } from '@angular/core';
import { NzTagModule } from 'ng-zorro-antd/tag';

/**
 * ServiceAnt Pill Component
 *
 * Status badge/pill following ServicePath design:
 * - Rounded (16px border radius)
 * - 12px font size
 * - Compact padding (4px 12px)
 * - Predefined color variants
 *
 * @example
 * <sa-pill variant="success">Approved</sa-pill>
 * <sa-pill variant="warning">Pending</sa-pill>
 * <sa-pill variant="error">Rejected</sa-pill>
 */
@Component({
  selector: 'sa-pill',
  imports: [NzTagModule],
  template: `
    <nz-tag [nzColor]="getColor()">
      <ng-content />
    </nz-tag>
  `,
  styles: [`
    :host {
      display: inline-block;
    }

    :host ::ng-deep .ant-tag {
      border-radius: 16px;
      font-family: 'Open Sans', sans-serif;
      font-size: 12px;
      padding: 4px 12px;
      line-height: 1.5;
      border: 1px solid transparent;
      margin: 0;
    }

    :host ::ng-deep .ant-tag-success {
      background-color: #f0f9ff;
      color: #10b981;
      border-color: #d1fae5;
    }

    :host ::ng-deep .ant-tag-warning {
      background-color: #fffbeb;
      color: #f59e0b;
      border-color: #fef3c7;
    }

    :host ::ng-deep .ant-tag-error {
      background-color: #fef2f2;
      color: #ef4444;
      border-color: #fecaca;
    }

    :host ::ng-deep .ant-tag-default {
      background-color: #ffffff;
      color: #2b3036;
      border-color: #e5e8ec;
    }

    :host ::ng-deep .ant-tag-primary {
      background-color: #f0fdf4;
      color: #74ba54;
      border-color: #d1fae5;
    }
  `]
})
export class SaPillComponent {
  /**
   * Pill variant/color
   * - 'success': Green (approved, active)
   * - 'warning': Yellow (pending, review)
   * - 'error': Red (rejected, failed)
   * - 'primary': ServicePath green
   * - 'default': Gray (neutral)
   */
  variant = input<'success' | 'warning' | 'error' | 'primary' | 'default'>('default');

  getColor(): string {
    const variantMap = {
      'success': 'success',
      'warning': 'warning',
      'error': 'error',
      'primary': 'primary',
      'default': 'default'
    };
    return variantMap[this.variant()];
  }
}

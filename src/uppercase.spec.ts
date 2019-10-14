import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';

@Component({ template: `<p>{{ 'hello' | uppercase }}</p>` })
class TestUpperCaseComponent {

}

describe('Repro', () => {
  it('should introduce uppercase pipe', () => {

    TestBed.configureTestingModule({
      declarations: [TestUpperCaseComponent]
    });

    const fixture = TestBed.createComponent(TestUpperCaseComponent);
    fixture.detectChanges();

    // asserts
    const nativeElement = fixture.nativeElement;
    const p = nativeElement.querySelector('p');
    expect(p.textContent).toBe('HELLO');
  });
});
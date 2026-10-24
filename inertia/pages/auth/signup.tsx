import AuthLayout from '~/layouts/auth'
import { Form, Link } from '@adonisjs/inertia/react'
import Label from '~/components/label'
import Input from '~/components/input'
import FieldError from '~/components/field_error'

export default function Signup() {
  return (
    <div className="container mx-auto">
      <h1>Create your account</h1>
      <Form route="new_account.store">
        {({ errors, processing }) => (
          <div className="space-y-5">
            <div className="field">
              <Label htmlFor="fullName">Full name</Label>
              <Input
                id="fullName"
                name="fullName"
                type="text"
                className="w-full"
                autoComplete="name"
                placeholder="Ada Lovelace"
                aria-invalid={errors.fullName ? 'true' : 'false'}
              />
              {errors.fullName && <FieldError error={errors.fullName} />}
            </div>

            <div className="field">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                className="w-full"
                autoComplete="email"
                placeholder="you@example.com"
                aria-invalid={errors.email ? 'true' : 'false'}
              />
              {errors.email && <FieldError error={errors.email} />}
            </div>

            <div className="field">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                placeholder="••••••••"
                aria-invalid={errors.password ? 'true' : 'false'}
                className="w-full"
              />
              {errors.password && <FieldError error={errors.password} />}
            </div>

            <div className="field">
              <Label htmlFor="passwordConfirmation">Confirm password</Label>
              <Input
                id="passwordConfirmation"
                name="passwordConfirmation"
                type="password"
                autoComplete="new-password"
                placeholder="••••••••"
                className={"w-full"}
                aria-invalid={errors.passwordConfirmation ? 'true' : 'false'}
              />
              {errors.passwordConfirmation && <FieldError error={errors.passwordConfirmation} />}
            </div>

            <button
              type="submit"
              className="btn btn--primary btn--block"
              disabled={processing}
              style={{ marginTop: 4 }}
            >
              {processing ? 'One moment…' : 'Create account'}
            </button>
          </div>
        )}
      </Form>

      <p className="auth__foot">
        Already have an account?{' '}
        <Link route="session.create" className="il">
          Sign in
        </Link>
      </p>
    </div>
  )
}

Signup.layout = [AuthLayout]

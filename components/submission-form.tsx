"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Upload, Send, CheckCircle } from "lucide-react"

export default function SubmissionForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    website: "",
    socialMedia: "",
    bio: "",
    articleTitle: "",
    category: "",
    articleContent: "",
    wordCount: 0,
    hasReadGuidelines: false,
    isOriginalContent: false,
    allowEditing: false,
  })

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))

    // Auto-calculate word count for article content
    if (field === "articleContent" && typeof value === "string") {
      const words = value
        .trim()
        .split(/\s+/)
        .filter((word) => word.length > 0)
      setFormData((prev) => ({
        ...prev,
        wordCount: words.length,
      }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const isFormValid = () => {
    return (
      formData.firstName &&
      formData.lastName &&
      formData.email &&
      formData.bio &&
      formData.articleTitle &&
      formData.category &&
      formData.articleContent &&
      formData.wordCount >= 800 &&
      formData.wordCount <= 1500 &&
      formData.hasReadGuidelines &&
      formData.isOriginalContent
    )
  }

  if (isSubmitted) {
    return (
      <Card className="max-w-2xl mx-auto">
        <CardContent className="text-center py-12">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Submission Received!</h3>
          <p className="text-gray-600 mb-6">
            Thank you for your submission. Our editorial team will review your article and get back to you within 5-7
            business days.
          </p>
          <Button
            onClick={() => {
              setIsSubmitted(false)
              setFormData({
                firstName: "",
                lastName: "",
                email: "",
                website: "",
                socialMedia: "",
                bio: "",
                articleTitle: "",
                category: "",
                articleContent: "",
                wordCount: 0,
                hasReadGuidelines: false,
                isOriginalContent: false,
                allowEditing: false,
              })
            }}
            variant="outline"
          >
            Submit Another Article
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl">Submit Your Article</CardTitle>
        <CardDescription>
          Fill out the form below to submit your article for consideration. All fields marked with * are required.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Author Information */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Author Information</h3>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name *</Label>
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange("firstName", e.target.value)}
                  placeholder="Enter your first name"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name *</Label>
                <Input
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange("lastName", e.target.value)}
                  placeholder="Enter your last name"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                placeholder="your.email@example.com"
                required
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="website">Website/Portfolio</Label>
                <Input
                  id="website"
                  type="url"
                  value={formData.website}
                  onChange={(e) => handleInputChange("website", e.target.value)}
                  placeholder="https://yourwebsite.com"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="socialMedia">Social Media Profile</Label>
                <Input
                  id="socialMedia"
                  value={formData.socialMedia}
                  onChange={(e) => handleInputChange("socialMedia", e.target.value)}
                  placeholder="@yourusername or profile URL"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="bio">Author Bio (50-100 words) *</Label>
              <Textarea
                id="bio"
                value={formData.bio}
                onChange={(e) => handleInputChange("bio", e.target.value)}
                placeholder="Tell us about yourself, your background, and your expertise..."
                className="min-h-[100px]"
                required
              />
              <p className="text-sm text-gray-500">
                {formData.bio.split(" ").filter((word) => word.length > 0).length} words
              </p>
            </div>
          </div>

          {/* Article Information */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Article Information</h3>

            <div className="space-y-2">
              <Label htmlFor="articleTitle">Article Title *</Label>
              <Input
                id="articleTitle"
                value={formData.articleTitle}
                onChange={(e) => handleInputChange("articleTitle", e.target.value)}
                placeholder="Enter your article title"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="category">Category *</Label>
              <Select value={formData.category} onValueChange={(value) => handleInputChange("category", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="personal-growth">Personal Growth & Wellbeing</SelectItem>
                  <SelectItem value="relationships">Human Connection & Relationships</SelectItem>
                  <SelectItem value="life-stories">Life Stories & Experiences</SelectItem>
                  <SelectItem value="kindness">Kindness & Positivity</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="articleContent">Article Content *</Label>
              <Textarea
                id="articleContent"
                value={formData.articleContent}
                onChange={(e) => handleInputChange("articleContent", e.target.value)}
                placeholder="Paste your full article content here..."
                className="min-h-[300px]"
                required
              />
              <div className="flex justify-between text-sm text-gray-500">
                <span>{formData.wordCount} words</span>
                <span
                  className={
                    formData.wordCount >= 800 && formData.wordCount <= 1500 ? "text-green-600" : "text-red-500"
                  }
                >
                  Ideal range: 800-1,500 words
                </span>
              </div>
            </div>
          </div>

          {/* File Upload */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Additional Files (Optional)</h3>

            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-gray-400 transition-colors">
              <Upload className="w-8 h-8 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 mb-2">Upload supporting documents or images</p>
              <p className="text-sm text-gray-500">Drag and drop files here, or click to browse</p>
              <input type="file" multiple accept=".doc,.docx,.pdf,.jpg,.jpeg,.png" className="hidden" id="fileUpload" />
              <label
                htmlFor="fileUpload"
                className="inline-block mt-4 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors cursor-pointer"
              >
                Choose Files
              </label>
            </div>
          </div>

          {/* Agreements */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Agreements</h3>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Checkbox
                  id="guidelines"
                  checked={formData.hasReadGuidelines}
                  onCheckedChange={(checked) => handleInputChange("hasReadGuidelines", checked as boolean)}
                />
                <Label htmlFor="guidelines" className="text-sm leading-relaxed">
                  I have read and agree to follow the submission guidelines outlined above. *
                </Label>
              </div>

              <div className="flex items-start space-x-3">
                <Checkbox
                  id="original"
                  checked={formData.isOriginalContent}
                  onCheckedChange={(checked) => handleInputChange("isOriginalContent", checked as boolean)}
                />
                <Label htmlFor="original" className="text-sm leading-relaxed">
                  I confirm that this content is original and has not been published elsewhere. *
                </Label>
              </div>

              <div className="flex items-start space-x-3">
                <Checkbox
                  id="editing"
                  checked={formData.allowEditing}
                  onCheckedChange={(checked) => handleInputChange("allowEditing", checked as boolean)}
                />
                <Label htmlFor="editing" className="text-sm leading-relaxed">
                  I allow Pleaze to make minor edits for clarity, style, and length while preserving the article's
                  intent.
                </Label>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-6 border-t">
            <Button
              type="submit"
              disabled={!isFormValid() || isSubmitting}
              className="w-full md:w-auto bg-[#17335F] hover:bg-[#17335F]/90"
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                  Submitting...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 mr-2" />
                  Submit Article
                </>
              )}
            </Button>
            {!isFormValid() && (
              <p className="text-sm text-gray-500 mt-2">
                Please fill in all required fields and ensure your article is between 800-1,500 words.
              </p>
            )}
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
